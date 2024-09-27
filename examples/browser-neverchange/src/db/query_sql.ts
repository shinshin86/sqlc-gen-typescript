// Code generated by sqlc. DO NOT EDIT.

import { NeverChangeDB } from "neverchange";

export const getAuthorQuery = `-- name: GetAuthor :one
SELECT id, name, bio FROM authors
WHERE id = ? LIMIT 1`;

export interface GetAuthorArgs {
    id: any;
}

export interface GetAuthorRow {
    id: any;
    name: any;
    bio: any | null;
}

export async function getAuthor(db: NeverChangeDB, args: GetAuthorArgs): Promise<GetAuthorRow | null> {
    const result = await db.query(getAuthorQuery, [args.id]);
    return result[0];
}

export const listAuthorsQuery = `-- name: ListAuthors :many
SELECT id, name, bio FROM authors
ORDER BY name`;

export interface ListAuthorsRow {
    id: any;
    name: any;
    bio: any | null;
}

export async function listAuthors(db: NeverChangeDB): Promise<ListAuthorsRow[]> {
    return await db.query(listAuthorsQuery, []);
}

export const createAuthorQuery = `-- name: CreateAuthor :exec
INSERT INTO authors (
  name, bio
) VALUES (
  ?, ?
)`;

export interface CreateAuthorArgs {
    name: any;
    bio: any | null;
}

export async function createAuthor(db: NeverChangeDB, args: CreateAuthorArgs): Promise<void> {
    await db.execute(createAuthorQuery, [args.name, args.bio]);
}

export const deleteAuthorQuery = `-- name: DeleteAuthor :exec
DELETE FROM authors
WHERE id = ?`;

export interface DeleteAuthorArgs {
    id: any;
}

export async function deleteAuthor(db: NeverChangeDB, args: DeleteAuthorArgs): Promise<void> {
    await db.execute(deleteAuthorQuery, [args.id]);
}

