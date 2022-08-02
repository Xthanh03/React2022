export default function TodoCard(props) {
    return (
        <div className="m-2 card col-lg-3 col-md-4 col-6">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
            </div>
        </div>
    )
}