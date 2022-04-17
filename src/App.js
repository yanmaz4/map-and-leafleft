import React from "react";
import "./styles.css";
import Tabs from "./Tabs";
import TabList from "react-tabs/lib/components/TabList";
import TabPanel from "react-tabs/lib/components/TabPanel";
import Tab from "react-tabs/lib/components/Tab";
import MyMap from "./COMPONENTS/MyMap";
import { LatLng } from "leaflet";
export default function App() {
  return (
    <div className="App">
      <div className="block">
        In this exercise you will have to:
        <ul>
          <li>
            Create a file <b>Tabs.js</b>
          </li>
          <li>
            In this file, create tabs with{"Tabs"}
            <b>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/reactjs/react-tabs"
              >
                react-tabs
                <Tabs />
                <TabList />
                <TabPanel />
                <Tab />
            
              </a>
            </b>
          </li>
          <li>
            Create a file <b>MyMap.js</b>
          </li>
          <li>
            In this file create a map with{"MyMap"}
            <b>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://react-leaflet.js.org/"
              ></a>
            </b>
          </li>
          <li>
            You component MyMap should have two properties <b>lng</b> and
            {"lat "}
            <b>lat</b>
          </li>
          <li>Import these two components down below </li>
        </ul>
      </div>
      <div className="block">
        <Tabs />
        <MyMap/>
      </div>
    </div>
  );
}
