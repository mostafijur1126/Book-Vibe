import React, { useContext } from 'react';
import { BookContext } from '../Context/BookProvider';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../Component/ListedBooks/ListedReadList';
import ListedWishlist from '../Component/ListedBooks/ListedWishlist';

const ListedBooks = () => {

    const { storedBooks, wishlist } = useContext(BookContext);
    // console.log(wishlist,storedBooks);
    return (
        <div className='max-w-7xl mx-auto'>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList></ListedReadList>
                </TabPanel>
                <TabPanel>
                   <ListedWishlist></ListedWishlist>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;