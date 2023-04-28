import React, { useState, useEffect } from "react";
import nicepic from "./pic/nice.jpg";
import Image from "next/image";
import htmlpic from "./pic/html_pic.png";
import csspic from "./pic/css_pic.png";
import phppic from "./pic/php_pic.png";
import sqlpic from "./pic/sql_pic.png";
import javapic from "./pic/java_pic.png";
import pypic from "./pic/py_pic.png";
import cpic from "./pic/c_pic.png";
import jspic from "./pic/js_pic.png";
import reactpic from "./pic/react_pic.png";
import unixpic from "./pic/unix_pic.png";
import Button from "@material-ui/core/Button";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import Line from "./pic/line.png";
import PhoneIcon from "@material-ui/icons/Phone";
import { motion } from "framer-motion";
import axios from "axios";
import { Typewriter } from "react-simple-typewriter";

const App = () => {
  const [showButton, setShowButton] = useState(false);
  const [alldata, setAlldata] = useState<string[]>([]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const getalldata = () => {
      try {
        axios.get("http://localhost:8080/alldata").then((res) => {
          console.log(res.data);
          setAlldata(res.data);
        });
      } catch (err) {
        return err;
      }
    };
    getalldata();
  }, []);

  console.log(`alldata = ${typeof alldata}`);

  return (
    <div className="Outmain">
      <div className="navbar">
        <a href="#Me">About Me</a>
        <a href="#Skills">My Skills</a>
        <a href="#Experience">Experience</a>
        <a href="#Contact">Contact</a>
        <a className="NICE">NICE Peerapat Thiensawat</a>
      </div>

      <motion.div
        className="main"
        id="Me"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <p>About Me</p>
        <div className="Img" style={{ display: "flex", marginBottom: "100px" }}>
          <Image
            src={nicepic}
            alt="NICE PICTURE"
            width={500}
            height={500}
            style={{ borderRadius: "50%" }}
          />
          <div>
            <div className="typewriter">
              <Typewriter
                words={[
                  "Hello!! My Name Is Nice",
                  "I'm From KMUTNB",
                  "I Like To Play Guitar!!",
                  "I Usually To Be Friendly With Everyone.",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={5000}
              />
            </div>
            <div className="content">
              <p>
                ชื่อ-นามสกุล :{" "}
                {alldata[0] +
                  " " +
                  alldata[1] +
                  " " +
                  "(" +
                  alldata[2] +
                  " " +
                  alldata[3] +
                  ")"}
              </p>
              <p>ชื่อเล่น : {alldata[4] + " " + "(" + alldata[5] + ")"}</p>
              <p>อายุ : {alldata[6]} ปี</p>
              <p>สิ่งที่ชอบ : {alldata[7]}</p>
              <p>คติประจำใจ : {alldata[8]} !!</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="main"
        id="Skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <p>My Skills</p>
        <div className="picskill">
          <Image
            src={htmlpic}
            alt="HTML PICTURE"
            width={150}
            height={150}
            style={{
              margin: "50px",
            }}
          />
          <Image
            src={csspic}
            alt="CSS PICTURE"
            width={100}
            height={150}
            style={{
              margin: "50px",
            }}
          />
          <Image
            src={phppic}
            alt="PHP PICTURE"
            width={250}
            height={150}
            style={{
              margin: "50px",
            }}
          />
          <Image
            src={sqlpic}
            alt="SQL PICTURE"
            width={350}
            height={150}
            style={{
              margin: "50px",
            }}
          />
          <Image
            src={javapic}
            alt="JAVA PICTURE"
            width={150}
            height={150}
            style={{
              margin: "50px",
            }}
          />
          <Image
            src={pypic}
            alt="PYTHON PICTURE"
            width={150}
            height={150}
            style={{
              margin: "50px",
            }}
          />
          <Image
            src={cpic}
            alt="C/C++ PICTURE"
            width={400}
            height={150}
            style={{
              margin: "50px",
            }}
          />
          <Image
            src={jspic}
            alt="JAVASCRIPT PICTURE"
            width={150}
            height={150}
            style={{
              margin: "50px",
            }}
          />
          <Image
            src={reactpic}
            alt="REACT PICTURE"
            width={250}
            height={150}
            style={{
              margin: "50px",
            }}
          />
          <Image
            src={unixpic}
            alt="UNIX PICTURE"
            width={400}
            height={150}
            style={{
              margin: "50px",
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="main"
        id="Experience"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <p>Experience</p>
        <div
          className="headd"
          style={{
            display: "flex",
            marginBottom: "50px",
            justifyContent: "space-around",
          }}
        >
          <li>ชั้นปีที่ 1</li>
          <li>ชั้นปีที่ 2</li>
          <li>ชั้นปีที่ 3</li>
        </div>
        <div
          className="body"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <div style={{ fontSize: "larger" }}>
            <p>- เคยเขียนโปรแกรมระบบจองสนาม Football ออนไลน์</p>{" "}
            <p>- เคยเขียนโปรแกรมระบบจองโรงแรม ออนไลน์</p>{" "}
          </div>
          <p>- เคยเขียน React เสมือนหน้าเว็บ Kaggle</p>
          <p>- เคยเขียนโปรแกรมระบบเช่า CD-DVD ออนไลน์</p>
        </div>
        <div
          className="body"
          style={{
            display: "flex",
            justifyContent: "space-around",
            fontSize: "larger",
            color: "darkred",
          }}
        >
          <p>สามารถรับชมผลงาน source code ได้ที่นี่</p>
          <p>สามารถรับชมผลงาน source code ได้ที่นี่</p>
          <p>สามารถรับชมผลงาน source code ได้ที่นี่</p>
        </div>
        <div
          className="body"
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "100px",
          }}
        >
          <div style={{ fontSize: "larger" }}>
            <p>โปรแกรมระบบจองสนาม Football (ภาษา python)</p>
            <p>
              <a href="https://github.com/peepatnice1212/Football.git">
                https://github.com/peepatnice1212/Football.git
              </a>
            </p>
            <p>โปรแกรมระบบจองโรงแรม (ภาษา C)</p>
            <p>
              <a href="https://github.com/peepatnice1212/Hotel.git">
                https://github.com/peepatnice1212/Hotel.git
              </a>
            </p>
          </div>

          <div style={{ fontSize: "larger" }}>
            <p>React เสมือนหน้าเว็บ Kaggle (ภาษา Javascript)</p>
            <p>
              <a href="https://github.com/peepatnice1212/react_oop.git">
                https://github.com/peepatnice1212/react_oop.git
              </a>
            </p>
          </div>

          <div style={{ fontSize: "larger" }}>
            <p>โปรแกรมระบบเช่า CD-DVD (ภาษา html,css,php,sql)</p>
            <p>
              <a href="https://github.com/peepatnice1212/mini_project.git">
                https://github.com/peepatnice1212/mini_project.git
              </a>
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="main"
        id="Contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <p>Contact</p>
        <div className="handlesocial" style={{ marginBottom: "100px" }}>
          <Button
            variant="contained"
            color="primary"
            href="https://www.facebook.com/ROCKNACHIL.SPADA/"
            startIcon={<FacebookIcon />}
            style={{
              width: "300px",
              padding: "20px",
              fontSize: "15px",
              margin: "50px",
            }}
          >
            Facebook
          </Button>
          <Button
            variant="contained"
            color="primary"
            href="https://www.instagram.com/nice_nice_nice_nice_nice_1212/"
            startIcon={<InstagramIcon />}
            style={{
              width: "300px",
              padding: "20px",
              fontSize: "15px",
              margin: "50px",
              backgroundColor: "#E4405F",
            }}
          >
            Instagram
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={
              <Image
                src={Line}
                alt="Line Icon"
                style={{ width: "20px", height: "20px" }}
              />
            }
            style={{
              width: "300px",
              padding: "20px",
              fontSize: "15px",
              margin: "50px",
              backgroundColor: "#00C300",
            }}
          >
            Line id : 0637244094
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<PhoneIcon />}
            style={{
              width: "300px",
              padding: "20px",
              fontSize: "15px",
              margin: "50px",
              backgroundColor: "#0099FF",
            }}
          >
            {" "}
            099-617-1831
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<EmailIcon />}
            style={{
              width: "300px",
              padding: "20px",
              fontSize: "15px",
              margin: "50px",
              backgroundColor: "#EA4335",
            }}
          >
            {" "}
            peepatnice@gmail.com
          </Button>

          <Button
            variant="contained"
            color="primary"
            href="https://github.com/peepatnice1212"
            startIcon={<GitHubIcon />}
            style={{
              width: "300px",
              padding: "20px",
              fontSize: "15px",
              margin: "50px",
              backgroundColor: "#24292e",
            }}
          >
            GitHub
          </Button>
        </div>
      </motion.div>

      {showButton && (
        <button className="scrollToTopButton" onClick={scrollToTop}>
          &#8679;
        </button>
      )}
    </div>
  );
};

export default App;
