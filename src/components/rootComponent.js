import React from 'react';
import SearchPanel from './searchPanel/serachPanel';
import SearchResult from './searchResult/searchResult';

const Header =
    <div key={1} className="Header">
        Geo Search
    </div>;

const RootComponent = () => (
    <div key={0} className="pageContainer">
        {Header}
        <div key={2} className="pageContent">
            <SearchPanel key={3} />
            <SearchResult key={4} />
        </div>
    </div>
);


export default RootComponent;
