import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'Theo 出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[

        {
          key: 'github',
          title: <><GithubOutlined /> Theo-Chan</>,
          href: 'https://github.com/Theo-Chan',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'MyBlog',
          href: 'https://ant.design',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
