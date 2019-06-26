import React from 'react'
import {
    render,
    cleanup
} from '@testing-library/react'
import _ from 'lodash'
import {shallow, mount} from "enzyme";

import ListFavorite from '../components/ListFavorite'

import favorite from '../store/favorite'

import consola from 'consola'

afterEach(cleanup);

// expect list all favorite are listed
it('List all favorite are listed', () => {
    const favs = [
        {
            city: 'Bandung'
        },
        {
            city: 'Jakarta'
        },
        {
            city: 'Semarang'
        }
    ];
   const _listFavorite = render(
       <ListFavorite favs={favs}/>
   );



   expect(_listFavorite).toMatchSnapshot()


});

// expect not listed favorites
it('Empty favorites', () => {

    const _listFavorite = mount(
        <ListFavorite favs={[]}/>
    );

    expect(_listFavorite.find('small').text()).toBe("Favorite is empty")
});

// expect failed key favorites
it('Failed key favorites', () => {
    const favs = [
        {
            town: 'Bandung'
        },
        {
            town: 'Jakarta'
        },
        {
            town: 'Semarang'
        }
    ];
    const _listFavorite = shallow(
        <ListFavorite favs={favs}/>
    );

    expect(_listFavorite.children()).toMatchObject({})
});

// adding city to state
it('Adding city to state',  () => {
    favorite.store.dispatch(favorite.action.addToFavorite('Bandung'));
    const currentCity = favorite.store.getState();

    const findBandung = _.find(currentCity, {city: 'Bandung'});
    expect(findBandung).toMatchObject({city: "Bandung"})
});

// adding same city to state
it('Adding same city to state', () => {
    favorite.store.dispatch(favorite.action.addToFavorite('Bandung'));
    const currentCity = favorite.store.getState();

    const findBandung = _.find(currentCity, {city: 'Bandung'});

    expect(findBandung.city === 'Bandung').toBeTruthy()
});