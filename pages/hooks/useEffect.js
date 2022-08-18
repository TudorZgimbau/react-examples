import { useState, useEffect } from "react";

const InitExample = () => {
  useEffect(() => {
    console.log("app mounted");
  }, []);
  return <div>init example</div>;
};

const TimeExample = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("one time trigger");
    }, 2000);
    const interval = setInterval(() => {
      console.log("triggered every 2 seconds");
    }, 2000);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);
  return <div>time example</div>;
};

const FetchExample = () => {
  const [text, setText] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const _res = await fetch(
        "https://www.pbinfo.ro/ajx-module/probleme/json-categorii-concursuri.php"
      );
      const data = await _res.text();
      console.log(data);
      setText(data);
    };
    fetchData();
  }, []);
  return <div>{text}</div>;
};

const SSRExample = () => {
  console.log("this will run both server and client side");

  useEffect(() => {
    console.log("this will run only client-side");
  }, []);
};

const UseEffectExample = () => {
  return;
};

export default UseEffectExample;
