import React, { useState, useEffect } from 'react'
import { fetchAllLaw } from '../../services/lawService';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { Avatar, List, Space } from 'antd';
import { postDetailLaw } from '../../services/lawService';
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
const LawPage = ({ setDataDetail }) => {
    const [data, setData] = useState([]);
    const navigate = useNavigate()
    const handleClick = async (title) => {
        const res = await postDetailLaw({ title: title }); // Gửi title như một object
        setDataDetail(res.data);
        console.log(title)
        console.log("detail", res.data)
        navigate(`get_new/`)
    }
    const getLaw = async () => {
        try {
            let res = await fetchAllLaw();
            setData(res.data);
            console.log(res.data);
        } catch (error) {
            console.error("Error fetching law data:", error);
        }
    }
    useEffect(() => {
        getLaw();
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
export default LawPage