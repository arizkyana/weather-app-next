import React from 'react'

import WithNavbar from '../layouts/WithNavbar'
import Header from '../components/Head'
import ListFavorite from '../components/ListFavorite'

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

        return (
            <WithNavbar className="px-6">
                <Header title="Favorites"/>
                <ListFavorite favs={this.state.favorites}/>
            </WithNavbar>
        )
    }
}

export default Favorite