const mainContainer = document.getElementById("mainContainer");
const addBlogBtn = document.getElementById("addBlog");

const staticBlog = [
    {
        title :"Learn web development",
        content: "To learn web development you should start with HTML CSS and JS"
    },
    {
        title :"Why learn python?",
        content: "Python is the only programming language that has the easiest syntax to read, and most versital"
    }
]

const editTitle = (blogID) => {
    const blog = document.getElementById(`blog-${blogID}`)
    const title =  document.querySelector(`#blog-${blogID} h1`)

    const newTitle = prompt("Enter new blog title: ")
    title.textContent = newTitle
}


const editContent = (blogID) => {
    const blog = document.getElementById(`blog-${blogID}`)
    const content =  document.querySelector(`#blog-${blogID} p`)

    const newContent = prompt("Enter new blog content: ")
    content.textContent = newContent
}


const deletePost = (blogID) => {
    const blog = document.querySelector(`#blog-${blogID}`)
    const title = document.querySelector(`#blog-${blogID} h1`).textContent
    const toDelete = confirm(`Are you sure you want to delete blog with title "${title}"?`)

    if (toDelete) {
        blog.remove()
        alert(`Blog title ${title} deleted successfully`)
    }
}


const createBlog = (title, content, blogID) =>{
    const article = document.createElement("article");
    article.setAttribute("id", `blog-${blogID}`)

    const blogTitle = document.createElement("h1");
    blogTitle.textContent = title;

    const blogContent = document.createElement("p");
    blogContent.textContent = content

    const editTitleBtn = document.createElement("button");
    editTitleBtn.setAttribute("id", "editTitleBtn");
    editTitleBtn.addEventListener("click", () => editTitle(blogID));
    editTitleBtn.textContent = "Edit Title";

    const editContentBtn = document.createElement("button");
    editContentBtn.setAttribute("id", "editContentBtn");
    editContentBtn.addEventListener("click", () => editContent(blogID));
    editContentBtn.textContent = "Edit Content"

    const deletePostBtn = document.createElement("button");
    deletePostBtn.setAttribute("id", "deletePostBtn");
    deletePostBtn.addEventListener("click", () => deletePost(blogID));
    deletePostBtn.textContent = "Delete Post"

    article.append(blogTitle)
    article.append(blogContent)
    article.append(editTitleBtn)
    article.append(editContentBtn)
    article.append(deletePostBtn)
    mainContainer.appendChild(article)
}

let blogID = 1
staticBlog.map((eachBlog) => {
    createBlog(eachBlog.title, eachBlog.content, blogID)
    blogID ++
})
const addBlog = () => {
    const title = prompt("What is your blog title?")
    const content = prompt("What is the content of your blog?")
    createBlog(title, content, blogID)
    blogID ++
}

addBlogBtn.addEventListener("click", addBlog)