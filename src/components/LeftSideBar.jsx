import { Filter, Plus, Settings } from "lucide-react";
import { useState } from "react";

const LeftSideBar = () => {
  const [contact, setContact] = useState([1, 2, 3]);
  const [product, setProduct] = useState([1, 2, 3]);
  const [album, setAlbum] = useState([1, 2, 3]);
  const [organization, setOrganization] = useState([1, 2, 3]);
  const [follower, setFollower] = useState([1, 2, 3, 4, 5]);
  const [yourFollower, setYourFollower] = useState([1, 2, 3, 4, 5]);
  let newArray = [4, 5, 6, 7, 8, 9, 10];

  return (
    <div style={{ gridArea: "sidebar" }} className="flex flex-col gap-y-4">
      {/* Contacts */}
      <div className="bg-white rounded-lg">
        <div className="flex items-center justify-between p-2 pl-3 mb-2 border-b gap-x-2">
          <div className="flex items-center space-x-2">
            <h3 className="text-base font-bold text-h3Color">Contacts</h3>
            <button className="text-blue-500">
              <Filter width={22} height={22} stroke="#337ab7" />
            </button>
            <button className="px-2 text-2xl leading-none text-white py-0.5 bg-blue rounded-3xl">
              ?
            </button>
          </div>
          <button className="px-3 py-1 text-sm text-white rounded-md bg-blue">
            <Plus width={18} height={18} /> New Contact
          </button>
        </div>

        <div className="px-3 pt-3 space-y-4">
          {contact.map((value) => (
            <div key={value} className="flex gap-x-4 items-top">
              <img
                src="https://placehold.co/50x50"
                alt="Contact Image"
                className="w-12 h-12 bg-gray-200 rounded"
              />
              <a href="#" className="text-h3Color">
                Contact {value}
              </a>
            </div>
          ))}
        </div>

        <div className="px-4 pb-2 text-right">
          <button
            className="text-sm text-h3Color"
            onClick={() => {
              if (contact.length === 3) {
                setContact([...contact, ...newArray]);
              } else {
                setContact(contact.slice(0, 3));
              }
            }}
          >
            Show All
          </button>
        </div>
      </div>

      {/* Product */}
      <div className="bg-white rounded-lg shadow ">
        <div className="flex items-center justify-between p-2 pl-3 mb-2 border-b">
          <h3 className="text-base font-bold text-h3Color">Products</h3>
          <button className="px-3 py-1 text-sm text-white rounded-md bg-blue">
            <Plus width={18} height={18} /> New Product
          </button>
        </div>

        <div className="px-3 pt-3 space-y-4">
          {product.map((value) => (
            <div
              key={value}
              className="flex items-center justify-between gap-x-4"
            >
              <div className="flex items-start gap-x-4">
                <img
                  src="https://placehold.co/50x50"
                  alt="Contact Image"
                  className="w-12 h-12 bg-gray-200 rounded"
                />
                <a href="#" className="text-h3Color">
                  Product {value}
                </a>
              </div>
              <Settings stroke="#337ab7" />
            </div>
          ))}
        </div>

        <div className="px-4 pb-2 text-right">
          <button
            onClick={() => {
              if (product.length === 3) {
                setProduct([...product, ...newArray]);
              } else {
                setProduct(product.slice(0, 3));
              }
            }}
            className="text-sm text-h3Color"
          >
            Show All
          </button>
        </div>
      </div>

      {/* Album */}
      <div className="bg-white rounded-lg shadow ">
        <div className="flex items-center justify-between p-2 pl-3 mb-2 border-b">
          <h3 className="text-base font-bold text-h3Color">Albums</h3>
          <button className="px-3 py-1 text-sm text-white rounded-md bg-blue">
            <Plus width={18} height={18} /> New Album
          </button>
        </div>

        <div className="px-3 pt-3 space-y-4">
          {album.map((value) => (
            <div
              key={value}
              className="flex items-center justify-between gap-x-4"
            >
              <div className="flex items-start gap-x-4">
                <img
                  src="https://placehold.co/50x50"
                  alt="Contact Image"
                  className="w-12 h-12 bg-gray-200 rounded"
                />
                <a href="#" className="text-h3Color">
                  Album {value}
                </a>
              </div>
              <Settings stroke="#337ab7" />
            </div>
          ))}
        </div>

        <div className="px-4 pb-2 text-right">
          <button
            onClick={() => {
              if (album.length === 3) {
                setAlbum([...album, ...newArray]);
              } else {
                setAlbum(album.slice(0, 3));
              }
              console.log(album);
            }}
            className="text-sm text-h3Color"
          >
            Show All
          </button>
        </div>
      </div>

      {/* Organizations */}
      <div className="bg-white rounded-lg shadow ">
        <div className="flex items-center justify-between p-2 pl-3 mb-2 border-b">
          <h3 className="text-base font-bold text-h3Color">Organizations</h3>
        </div>

        <div className="px-3 pt-3 space-y-4">
          {organization.map((value) => (
            <div
              key={value}
              className="flex items-center justify-between gap-x-4"
            >
              <div className="flex items-start gap-x-4">
                <img
                  src="https://placehold.co/96x56"
                  alt="Contact Image"
                  className="w-24 bg-gray-200 rounded h-14"
                />
                <a href="#" className="text-h3Color">
                  Organization {value}
                </a>
              </div>
              <Settings stroke="#337ab7" />
            </div>
          ))}
        </div>

        <div className="px-4 pb-2 text-right">
          <button
            onClick={() => {
              if (organization.length === 3) {
                setOrganization([...organization, ...newArray]);
              } else {
                setOrganization(organization.slice(0, 3));
              }
              console.log(organization);
            }}
            className="text-sm text-h3Color"
          >
            Show All
          </button>
        </div>
      </div>

      {/* Follower */}
      <div className="bg-white rounded-lg shadow ">
        <div className="flex items-center justify-between p-2 pl-3 mb-2 border-b">
          <h3 className="text-base font-bold text-h3Color">Followers</h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 px-3 pt-2">
          {follower.map((value) => (
            <a href="#" key={value}>
              <img
                src="https://placehold.co/50x50"
                alt="Contact Image"
                className="w-12 h-12 bg-gray-200 rounded-3xl"
              />
            </a>
          ))}
        </div>

        <div className="px-4 py-2 text-right">
          <button
            onClick={() => {
              if (follower.length === 5) {
                setFollower([...follower, ...newArray]);
              } else {
                setFollower(follower.slice(0, 5));
              }
              console.log(follower);
            }}
            className="text-sm text-h3Color"
          >
            Show All
          </button>
        </div>
      </div>

      {/* People You Follow */}
      <div className="bg-white rounded-lg shadow ">
        <div className="flex items-center justify-between p-2 pl-3 mb-2 border-b">
          <h3 className="text-base font-bold text-h3Color">
            People You Follow
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 px-4 pt-3">
          {yourFollower.map((value) => (
            <a href="#" key={value}>
              <img
                src="https://placehold.co/50x50"
                alt="Contact Image"
                className="w-12 h-12 bg-gray-200 rounded-3xl"
              />
            </a>
          ))}
        </div>

        <div className="px-4 py-2 text-right">
          <button
            onClick={() => {
              if (yourFollower.length === 5) {
                setYourFollower([...yourFollower, ...newArray]);
              } else {
                setYourFollower(yourFollower.slice(0, 5));
              }
              console.log(yourFollower);
            }}
            className="text-sm text-h3Color"
          >
            Show All
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
