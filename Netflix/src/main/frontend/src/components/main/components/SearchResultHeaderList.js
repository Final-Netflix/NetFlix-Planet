import React from 'react';

const SearchResultHeaderList = () => {
    return (
        <div className="c1-search-title-header">
            <div className="c1-rail">
                <div className="c1-suggestions">
                    <div className="c1-ptrack-container">
                        <div className="c1-ptrack-content">
                            <div className="c1-suggestionRailContainer">
                                <span className="c1-suggestionsLabel text-2xl">다음과 관련된 콘텐츠:</span>
                                    <div>
                                        <ul className = "text-2xl">
                                        
                                        </ul>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResultHeaderList;