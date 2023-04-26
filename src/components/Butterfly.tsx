import React from "react";
import Lottie from "lottie-react";
import butterfly from "@/assets/butterfly.json";

export default function Butterfly() {
    return (
        <div className="w-32 fixed animate-bounce">
            <Lottie animationData={butterfly} loop={true} />
        </div>
    );
}
