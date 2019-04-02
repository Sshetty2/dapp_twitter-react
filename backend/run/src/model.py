#!/usr/bin/env python3

import sqlite3
import time
import hashlib
import uuid
import os.path


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
db_path = os.path.join(BASE_DIR, "./datastores/master.db")



CONFIG = {
    'DBNAME': db_path,
    'SALT': "!$33gl3d33g"
}

DBNAME = "master.db"

## ---- REST API ENDPOINT FUNCTION CALLS --- ##


def validate_pw(useridobj):
    userid= useridobj['userid']
    password= useridobj['password']
    
    try: 
        user_object = set_user_object(userid)
    except:
        return "username error"
    pass_hash = user_object.pass_hash
    if user_object.check_password(pass_hash, password):
        return "success"
    return "password error"

def create_new_user(useridobj):
    userid = useridobj['userid']
    password = useridobj['password']
    try:
        user_type = useridobj['user_type']
    except:
        user_type = 'user'
    try:
        user_object = Account(username=userid)
    except:
        return "username error"
    if user_object.check_set_username():
        return "userid already exists"
    hashed_pw = user_object.calculatehash(password)
    user_object.pass_hash = hashed_pw
    user_object.type = user_type
    user_object.save()

def create_new_user_query(userid, password, user_type):
    try:
        user_object = Account(username=userid)
    except:
        return "username error"
    if user_object.check_set_username():
        return "userid already exists"
    hashed_pw = user_object.calculatehash(password)
    user_object.pass_hash = hashed_pw
    user_object.type = user_type
    user_object.save()

    


def set_user_object(username):
    user_object = Account(username=username)
    user_object = user_object.set_from_username()
    return user_object


##TODO:
def create_tweet(username, tweet):
    user_object = set_user_object(username=username)
    comment_obj= Tweet(pk=None, users_pk=user_object.pk, content=tweet, time=None)
    comment_obj.save()

##TODO:
def read_all_tweets(username):
    user_object = set_user_object(username=username)
    return user_object.get_all_tweets()

##TODO:
def update_tweet(self, tweet):
    pass

##TODO:
def delete_tweet(self, tweet):
    pass
    

##TODO:



class OpenCursor:
    def __init__(self, *args, **kwargs):
        # update:
        if 'dbname' in kwargs:
            self.dbname = kwargs['dbname']
            del(kwargs['dbname'])
        else:
            self.dbname = CONFIG['DBNAME']

        self.conn = sqlite3.connect(self.dbname, *args, **kwargs)
        self.conn.row_factory = sqlite3.Row  # access fetch results by col name
        self.cursor = self.conn.cursor()

    def __enter__(self):
        return self.cursor

    def __exit__(self, extype, exvalue, extraceback):
        if not extype:
            self.conn.commit()
        self.cursor.close()
        self.conn.close()


class Account:
    def __init__(self, pk=None, username=None, pass_hash=None, user_type= None):
        self.pk = pk
        self.username = username
        self.pass_hash = pass_hash
        self.type = user_type

    #def getposition(self, pk):

    def save(self):
        with OpenCursor() as cur:
            if not self.pk:
                SQL = """
                INSERT INTO users(username, pass_hash, type)
                VALUES(?, ?, ?);
                """
                cur.execute(SQL, (self.username, self.pass_hash, self.type))
                self.pk = cur.lastrowid

            else:
                SQL = """
                UPDATE users SET username=?, pass_hash=?, type=? WHERE
                pk=?;
                """
                cur.execute(SQL, (self.username, self.pass_hash, self.type))

    def calculatehash(self, password):
        hashobject = hashlib.sha256()
        salt = CONFIG['SALT']
        saltedstring = password.encode() + salt.encode()
        hashobject.update(saltedstring)
        return hashobject.hexdigest()

    def check_password(self, hashed_password, user_password):
        hashobject = hashlib.sha256()
        salt = CONFIG['SALT']
        new_salted_string = user_password.encode() + salt.encode()
        hashobject.update(new_salted_string)
        new_hashed_pw = hashobject.hexdigest()
        if hashed_password == new_hashed_pw:
            return True
        return False

    def set_from_row(self, row):
        self.pk = row["pk"]
        self.username = row["username"]
        self.pass_hash = row["pass_hash"]
        self.type = row["type"]
        return self
    
    def check_set_username(self):
        try:
            with OpenCursor() as cur: 
                SQL = """
                SELECT * FROM users WHERE username = ?;
                """
                cur.execute(SQL, (self.username, ))
                row=cur.fetchone()   
            if not row:
                return False
            self.set_from_row(row)
            # if the username is found, the attributes are set 
            return True
        except:
            return False
    
    def set_from_username(self):
        with OpenCursor() as cur: 
            SQL = """
            SELECT * FROM users WHERE username = ?;
            """
            cur.execute(SQL, (self.username, ))
            row=cur.fetchone()  
        self.set_from_row(row)
        return self

    def create_tweet(self, username, tweet):
        with OpenCursor() as cur:
            SQL = """
            SELECT * FROM tweets WHERE users_pk = ?;
            """

    def get_all_tweets(self):
        with OpenCursor() as cur:
            SQL = """
            SELECT * FROM tweets WHERE users_pk = ?;
            """
            cur.execute(SQL, (self.pk, ))
            rows = cur.fetchall()
            results = []
            for row in rows: 
                acc = Tweet()
                acc.set_from_row(row)
                results.append(acc)
            return results


class Tweet:
    def __init__(self, users_pk=None, pk=None, content=None, time=None):
        self.pk = pk
        self.users_pk = users_pk
        self.content = content
        self.time = time

    #def getposition(self, pk):

    def save(self):
        if self.time is None:
            self.time = time.asctime(time.localtime(time.time()))
        with OpenCursor() as cur:
            if not self.pk:
                SQL = """
                INSERT INTO tweets(users_pk, content, time)
                VALUES(?, ?, ?);
                """
                cur.execute(SQL, (self.users_pk, self.content, self.time))
                self.pk = cur.lastrowid

            else:
                SQL = """
                UPDATE tweets SET users_pk=?, content=?, time=? WHERE
                pk=?;
                """
                cur.execute(SQL, (self.username, self.content, self.time))

    def set_from_row(self, row):
        self.pk = row["pk"]
        self.users_pk = row["users_pk"]
        self.content = row["content"]
        self.time = row["time"]
        return self


