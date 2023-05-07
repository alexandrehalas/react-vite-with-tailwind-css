const Article = ({ title, text, tags, image, alt }) => {
    return (
        <div className="p-5 bg-gray-200 dark:bg-graySystem-200 sm:rounded-xl sm:shadow-lg flex flex-col items-center gap-2 sm:hover:shadow-gray-500 sm:hover:dark:shadow-black sm:hover:shadow-lg">
            <h3 className="text-xl text-blueSystem-200 dark:text-gray-200 font-bold">{title}</h3>
            <div className="w-full flex-row justify-end gap-2 pr-5 hidden sm:flex">
                {tags.map(tag => <span key={tag} className="bg-blueSystem-100 dark:bg-graySystem-100 px-4 py-1 rounded-full text-gray-200 font-bold text-xs uppercase hover:bg-blueSystem-200 hover:scale-110 cursor-pointer">{tag}</span>)}
            </div>
            <div className="grid gap-1">
                {text.map((content, index) => <p key={index} className="text-blueSystem-200 dark:text-gray-400">{content}</p>)}
            </div>
            {image && <img className="mt-4" src={image} />}
            {image && alt && <span className="sr-only">{alt}</span>}
        </div>
    )
}

export default Article
