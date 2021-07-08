
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface User {
    id: string;
    posts: Post[];
}

export interface Post {
    id: string;
    body: string;
}

export interface IQuery {
    user(id?: string): User | Promise<User>;
    post(id?: string): Post | Promise<Post>;
}
