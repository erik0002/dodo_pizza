import React from 'react';
import ContentLoader from "react-content-loader";

const PizzaLoadingBlock= () => {
        return (
            <ContentLoader
                speed={2}
                width={280}
                height={460}
                viewBox="0 0 280 460"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="-259" y="25" rx="3" ry="3" width="88" height="6" />
                <rect x="6" y="-217" rx="3" ry="3" width="52" height="12" />
                <rect x="-103" y="-194" rx="3" ry="3" width="410" height="6" />
                <rect x="12" y="-93" rx="3" ry="3" width="380" height="6" />
                <rect x="-8" y="-167" rx="3" ry="3" width="178" height="6" />
                <circle cx="-114" cy="13" r="20" />
                <circle cx="-133" cy="217" r="31" />
                <circle cx="129" cy="129" r="129" />
                <rect x="0" y="267" rx="3" ry="3" width="280" height="30" />
                <rect x="2" y="310" rx="6" ry="6" width="280" height="84" />
                <rect x="7" y="409" rx="3" ry="3" width="91" height="36" />
                <rect x="-172" y="476" rx="3" ry="3" width="99" height="45" />
                <rect x="140" y="404" rx="20" ry="20" width="142" height="45" />
            </ContentLoader>
        )
}

export default PizzaLoadingBlock;
