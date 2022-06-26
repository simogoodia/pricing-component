import React, { useLayoutEffect } from "react";

function Annually() {
    useLayoutEffect(() => {
        document.querySelector(".annually").style.display = "none";
    }, []);

    return (
        <div>
            <div className="wrapper annually price">
                <div className="box basic">
                    <h4>Basic</h4>
                    <h2>$199.99</h2>
                    <ul>
                        <li>500GB Storage</li>
                        <li>2 Users Allowed</li>
                        <li>Send up to 3GB</li>
                    </ul>
                    <button>LEARN MORE</button>
                </div>
                <div className="box pro">
                    <h4>Professional</h4>
                    <h2>$249.99</h2>
                    <ul>
                        <li>1TB Storage</li>
                        <li>5 Users Allowed</li>
                        <li>Send up to 10GB</li>
                    </ul>
                    <button>LEARN MORE</button>
                </div>
                <div className="box master">
                    <h4>Master</h4>
                    <h2>$399.99</h2>
                    <ul>
                        <li>2TB Storage</li>
                        <li>10 Users Allowed</li>
                        <li>Send up to 20GB</li>
                    </ul>
                    <button>LEARN MORE</button>
                </div>
            </div>
        </div>
    );
}
export default Annually;