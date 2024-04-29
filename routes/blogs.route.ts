import { Router } from "express";
import controllers from "../controllers";

const router = Router();

router.route("/").get(controllers.blogs.getAllBlogs);
router.route("/:id").get(controllers.blogs.getBlogById);

router.route("/").post(controllers.blogs.createBlog);
router
	.route("/:id")
	.patch(controllers.blogs.updateBlog)
	.delete(controllers.blogs.removeBlog);

export default router;