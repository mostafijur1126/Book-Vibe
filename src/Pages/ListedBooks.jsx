import React, { useState } from 'react';
// import { BookContext } from '../Context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../Component/ListedBooks/ListedReadList';
import ListedWishlist from '../Component/ListedBooks/ListedWishlist';

const ListedBooks = () => {

    // const { storedBooks, wishlist } = useContext(BookContext);
    // console.log(wishlist,storedBooks);
    const [shortingType, setShortingType] = useState("");
    // console.log(shortingType);
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex items-center justify-center pt-10'>
                <div className="dropdown dropdown-start">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn m-1">Shorted by: {shortingType} ⬇️
                    </div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={()=> setShortingType("pages")}><a>Pages</a></li>
                        <li onClick={()=> setShortingType("reating")}><a>Reating</a></li>
                    </ul>
                </div>

            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList shortingType={shortingType}></ListedReadList>
                </TabPanel>
                <TabPanel>
                    <ListedWishlist shortingType={shortingType}></ListedWishlist>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;