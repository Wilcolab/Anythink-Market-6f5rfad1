/**
 * @module routes/api/comments
 * @description This module handles the routes for comments in the application.
 * 
 * @requires express
 * @requires mongoose
 * @requires Comment model
 * 
 * @route GET /api/comments
 * @returns {Array} 200 - An array of comments
 * @throws {Object} 500 - An error object if fetching comments fails
 * 
 * @route DELETE /api/comments/:id
 * @param {string} id - The ID of the comment to delete
 * @returns {Object} 200 - A success message if the comment is deleted
 * @returns {Object} 404 - An error object if the comment is not found
 * @throws {Object} 500 - An error object if deleting the comment fails
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
router.get("/", async (req, res) => {
    try {
      const comments = await Comment.find();
      res.status(200).json(comments);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch comments" });
    }
  });

  // Add another endpoint for deletinng a comment
    router.delete("/:id", async (req, res) => {
        try {       
            const deletedComment = await Comment.findByIdAndDelete(req.params.id);
            if (!deletedComment) {
                return res.status(404).json({ error: "Comment not found" });
            }
            res.status(200).json({ message: "Comment deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: "Failed to delete comment" });
        }
    });