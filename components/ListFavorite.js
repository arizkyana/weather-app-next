import React from 'react'
import Link from "next/link";

class ListFavorite extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        const Favs = () => {
            if (!this.props.favs || this.props.favs.length <= 0) {
                return (
                    <div>
                        <small className="text-red-500">Favorite is empty</small>
                    </div>
                )
            } else {
                return this.props.favs.map((f, i) => (
                    <Link key={i} as={`/q/${f.city}`} href={`/?city=${f.city}`}>
                        <div
                            className="border mt-1 border-gray-500 px-3 py-3 cursor-pointer hover:bg-teal-500 hover:border-teal-500 hover:text-white">
                            <h1>{f.city}</h1>
                        </div>
                    </Link>
                ))
            }
        };

        return (
            <Favs/>
        )

    }
}

export default ListFavorite