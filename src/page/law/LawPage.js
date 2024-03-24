import React, { useState, useEffect } from 'react'
import { fetchAllLaw } from '../../services/lawService';
import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Space } from 'antd';
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
const LawPage = () => {
    const [data, setData] = useState([]);
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
                    actions={[
                        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                        <img
                            width={272}
                            alt="logo"
                            src={item.image_url}
                        />
                    }
                >
                    <List.Item.Meta
                        title={<a href={item.href}>{item.title}</a>}
                        description={item.description}
                    />
                    {item.content}
                </List.Item>
            )}
        />
    )
}
export default LawPage