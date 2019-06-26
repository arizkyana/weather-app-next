import '../styles/index.css'

import Link from 'next/link'
import React from 'react'
import consola from 'consola'

import favorite from '../store/favorite'



class WithNavbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            countFavorites: 0
        }
    }

    async componentDidMount() {
        await this.getCountFavorite();

        favorite.store.subscribe(() => {
            consola.info('update state', favorite.store.getState());
            const favorites = favorite.store.getState();
            this.setState({countFavorites: favorites ? favorites.length : 0});
        })
    }

    // async componentDidUpdate(prevProps, prevState, snapshot) {
    //     await this.getCountFavorite()
    // }

    getCountFavorite = async () => {
        const favorites = await favorite.store.getState();
        this.setState({countFavorites: favorites ? favorites.length : 0});
        consola.info('current favorites navbar ==>> ', favorites)
    };

    render() {
        return (

            <div>
                <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-4">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">

                        <Link href="/">
                            <span className="font-semibold text-xl tracking-tight cursor-pointer">Weather app</span>
                        </Link>
                    </div>
                    <div className="block lg:hidden">
                        <button
                            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div className="text-sm lg:flex-grow">
                            <Link href="/favorite">
                                <a
                                    className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                                    Favorites ({this.state.countFavorites})
                                </a>

                            </Link>
                        </div>

                    </div>
                </nav>

                <div className="pt-6 px-2">
                    {this.props.children}
                </div>

            </div>
        )
    }
}

export default WithNavbar