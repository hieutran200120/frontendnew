import React, { useEffect, useState } from 'react'
import { fetchDetailLaw } from '../../services/lawService';
const LawDetailPage = ({ title }) => {
    const [dataDetail, setDataDetail] = useState();
    const getLawDetail = async () => {
        try {
            const res = await fetchDetailLaw(title)
            setDataDetail(res.data);
            console.log(dataDetail)
        } catch (error) {
            console.error("Error fetching law data:", error);
        }
        useEffect(() => {
            getLawDetail();
        }, [title])
    }
    return (
        <div>LawDetailPage</div>
    )
}

export default LawDetailPage