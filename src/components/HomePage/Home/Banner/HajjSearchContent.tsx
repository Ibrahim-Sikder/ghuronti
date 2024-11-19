import React from 'react';
import './Banner.css'
import Link from 'next/link';
import { Search } from '@mui/icons-material';
const HajjSearchContent = () => {
    return (
        <div>
            <div className='hajjSearchWrap  flex items-center justify-center mt-16 '>
                <div className='flex items-center'>
                    <select>
                        <option value="Hajj Package">Hajj Package</option>
                        <option value="Umrah Package">Umrah Package</option>
                    </select>
                    <Link href={`/hajj?type`}>
                        <div className='searchBtnWrap'>
                            <button> Search</button>
                            <Search className='searchIcon' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HajjSearchContent;