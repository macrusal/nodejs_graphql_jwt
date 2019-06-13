import { DBConnection } from "../../../interfaces/DBConnectionInterface";
import { GraphQLResolveInfo } from "graphql/type/definition";
import { Transaction } from "sequelize";
import { CommentInstance } from "../../../models/CommentModel";

export const commentResolver = {

    Comment: {
        user: (parent, args, {db}: {db: DBConnection}, info: GraphQLResolveInfo) => {
            return db.User
                .findById(parent.get('user'));
        },
        post: (parent, args, {db}: {db: DBConnection}, info: GraphQLResolveInfo) => {
            return db.User
                .findById(parent.get('post'));
        }
    },

    Query: {
        commentsByPost: (parent, {postID, first = 10, offset = 0}, {db}: {db: DBConnection}, info: GraphQLResolveInfo) => {
            return db.Comment
                .findAll({
                    where: {post: postID},
                    limit: first,
                    offset: offset
                });
        }
    },

    Mutation: {
        createComment: (parent, {input}, {db}: {db: DBConnection}, info: GraphQLResolveInfo) => {
            return db.sequelize.transaction((t: Transaction) => {
                return db.Comment
                    .create(input, {transaction: t});
            });
        },
        updateComment: (parent, {id, input}, {db}: {db: DBConnection}, info: GraphQLResolveInfo) => {
            id = parseInt(id);
            return db.sequelize.transaction((t: Transaction) => {
                return db.Comment
                    .findById(id)
                    .then((comment: CommentInstance) => {
                        if(!comment) throw new Error(`Comment with id ${id} not found!`);
                            return comment.update(input, {transaction: t});
                    });
            });
        }, 
        deleteComment: (parent, {id}, {db}: {db: DBConnection}, info: GraphQLResolveInfo) => {
            id = parseInt(id);
            return db.sequelize.transaction((t: Transaction) => {
                return db.Comment
                    .findById(id)
                    .then((comment: CommentInstance) => {
                        if(!comment) throw new Error(`Comment with id ${id} not found!`);
                            return comment.destroy({transaction: t})
                                .then(comment => comment)
                                .catch(error => {
                                    return false;
                                })
                    });
            });
        }
    }
}