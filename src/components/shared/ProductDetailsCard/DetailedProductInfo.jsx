/* eslint-disable react/prop-types */
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import MainContainer from "../../../layouts/container/MainContainer";
import 'react-tabs/style/react-tabs.css';

const DetailedProductInfo = ({ productData }) => {
    const { availability, price, discount, desc } = productData;

    const isOutOfStock = availability === "out of stock";
    const discountedPrice = discount > 0 && !isOutOfStock ? price - (price * (discount / 100)) : null;
    return (
        <MainContainer>
            <div className="mt-10">
                <Tabs>
                    <TabList className="text-sm uppercase border-b font-bold">
                        <Tab >Description</Tab>
                        <Tab >Additional Details</Tab>
                    </TabList>

                    <TabPanel className="mt-5 text-sm">
                        <h2 >{desc || "No data found"}</h2>
                    </TabPanel>
                    <TabPanel className="mt-5 text-sm flex flex-col justify-center items-center ">
                        <h1><span className="font-bold uppercase">Actual Price :</span> {price} $</h1>
                        <h1><span className="font-bold uppercase">Discount :</span> {discount} %</h1>
                        <h1><span className="font-bold uppercase">Discounted Price :</span> {discountedPrice || "N/A"}</h1>

                    </TabPanel>
                </Tabs>
            </div>
        </MainContainer>
    );
};

export default DetailedProductInfo;
