import React from 'react'
import Link from 'next/link'

import WithNavbar from '../layouts/WithNavbar'
import Header from '../components/Head'

import favorite from '../store/favorite'

import consola from 'consola'

class Favorite extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            favorites: []
        }
    }

    async componentDidMount() {
        const favorites = await favorite.store.getState();
        this.setState({favorites});

        consola.info('favorites', this.state.favorites)
    }

    render() {
        const ListFavorite = () => {
            if (!this.state.favorites) {
                return (
                    <div>
                        <p className="text-red-500">Favorite is empty</p>
                    </div>
                )
            } else {

                return this.state.favorites.map((f, i) => (
                    <Link key={i} href={{
                        pathname: 'index',
                        query: {
                            city: f.city
                        }
                    }}>
                        <div
                            className="border mt-1 border-gray-500 px-3 py-3 cursor-pointer hover:bg-teal-500 hover:border-teal-500 hover:text-white">
                            <h1>{f.city}</h1>
                        </div>
                    </Link>
                ));
            }

        };
        return (
            <div className="px-6">
                <Header title="Favorites"/>
                <ListFavorite/>
            </div>
        )
    }
}

export default WithNavbar(Favorite)