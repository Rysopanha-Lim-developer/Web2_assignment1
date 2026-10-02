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

const editTitle = (target) => {
    const title =  target.firstChild

    const newTitle = prompt("Enter new blog title: ")
    title.textContent = newTitle
}


const editContent = (target) => {
    const blog = target.firstChild.textContent
    const content =  target.childNodes[1]

    const newContent = prompt("Enter new blog content: ")
    content.textContent = newContent
}


const deletePost = (target) => {
    const blog = target
    const title = target.firstChild.textContent
    const toDelete = confirm(`Are you sure you want to delete blog with title "${title}"?`)

    if (toDelete) {
        blog.remove()
        alert(`Blog title ${title} deleted successfully`)
    }
}


const createBlog = (title, content) =>{
    const article = document.createElement("article");

    const blogTitle = document.createElement("h1");
    blogTitle.textContent = title;

    const blogContent = document.createElement("p");
    blogContent.textContent = content

    const editTitleBtn = document.createElement("button");
    editTitleBtn.setAttribute("id", "editTitleBtn");
    editTitleBtn.addEventListener("click", (e) => {
        editTitle(e.target.parentElement)
    });
    editTitleBtn.textContent = "Edit Title";

    const editContentBtn = document.createElement("button");
    editContentBtn.setAttribute("id", "editContentBtn");
    editContentBtn.addEventListener("click", (e) => {
        editContent(e.target.parentElement)
    });
    editContentBtn.textContent = "Edit Content"

    const deletePostBtn = document.createElement("button");
    deletePostBtn.setAttribute("id", "deletePostBtn");
    deletePostBtn.addEventListener("click", (e) => {
        deletePost(e.target.parentElement)
    });
    deletePostBtn.textContent = "Delete Post"

    article.append(blogTitle)
    article.append(blogContent)
    article.append(editTitleBtn)
    article.append(editContentBtn)
    article.append(deletePostBtn)
    mainContainer.appendChild(article)
}


const addBlog = () => {
    const title = prompt("What is your blog title?")
    const content = prompt("What is the content of your blog?")
    createBlog(title, content)
}

window.onload = () => {
    staticBlog.map((eachBlog) => {
        createBlog(eachBlog.title, eachBlog.content)
    })

    addBlogBtn.addEventListener("click", addBlog)
}