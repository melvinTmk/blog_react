export default function Post({props}:any) {
    return (
        <div className="post">
            <h5 className="post-title">{props.element.title}</h5>
            <p className="post-content">{props.element.content}</p>
        </div>
    )
}
