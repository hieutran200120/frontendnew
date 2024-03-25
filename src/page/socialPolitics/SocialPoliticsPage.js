import React, { useState, useEffect } from 'react'
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { Avatar, List, Space } from 'antd';
import { fetchAllSocialPolitics } from '../../services/socialPoliticsService';
import { postDetailSocialPolitics } from '../../services/socialPoliticsService';
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
const SocialPoliticsPage = ({ setDataSocialPolitics }) => {
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    const handleClick = async (title) => {
        const res = await postDetailSocialPolitics({ title: title }); // Gửi title như một object
        setDataSocialPolitics(res.data);
        console.log(title)
        console.log("detail", res.data)
        navigate(`/ctxh/get_new`)
    }
    const getSocialPolitics = async () => {
        try {
            let res = await fetchAllSocialPolitics();
            setData(res.data);
            console.log(res.data);
        } catch (error) {
            console.error("Error fetching law data:", error);
        }
    }
    useEffect(() => {
        getSocialPolitics();
    }, [])

    return (
        <List
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 7,
            }}
            dataSource={data}
            renderItem={(item) => (
                <List.Item
                    key={item.title}

                    extra={
                        <img
                            width={272}
                            alt="logo"
                            src={item.image_url}
                        />
                    }
                >
                    <List.Item.Meta
                        title={<a onClick={() => handleClick(item.title)}>{item.title}</a>}
                        description={item.date}
                    />
                    {item.p}
                </List.Item>
            )}
        />
    )
}
export default SocialPoliticsPage