"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../../utils/utils");
exports.commentResolvers = {
    Comment: {
        user: (parent, args, { db }, info) => {
            return db.User
                .findById(parent.get('user'))
                .catch(utils_1.handleError);
        },
        post: (parent, args, { db }, info) => {
            return db.User
                .findById(parent.get('post'))
                .catch(utils_1.handleError);
        }
    },
    Query: {
        commentsByPost: (parent, { postID, first = 10, offset = 0 }, { db }, info) => {
            postID = parseInt(postID);
            return db.Comment
                .findAll({
                where: { post: postID },
                limit: first,
                offset: offset
            })
                .catch(utils_1.handleError);
        }
    },
    Mutation: {
        createComment: (parent, { input }, { db }, info) => {
            return db.sequelize.transaction((t) => {
                return db.Comment
                    .create(input, { transaction: t });
            })
                .catch(utils_1.handleError);
        },
        updateComment: (parent, { id, input }, { db }, info) => {
            id = parseInt(id);
            return db.sequelize.transaction((t) => {
                return db.Comment
                    .findById(id)
                    .then((comment) => {
                    if (!comment)
                        throw new Error(`Comment with id ${id} not found!`);
                    return comment.update(input, { transaction: t });
                });
            })
                .catch(utils_1.handleError);
        },
        deleteComment: (parent, { id }, { db }, info) => {
            id = parseInt(id);
            return db.sequelize.transaction((t) => {
                return db.Comment
                    .findById(id)
                    .then((comment) => {
                    if (!comment)
                        throw new Error(`Comment with id ${id} not found!`);
                    return comment.destroy({ transaction: t })
                        .then(comment => comment)
                        .catch(error => {
                        return false;
                    });
                });
            })
                .catch(utils_1.handleError);
        }
    }
};
