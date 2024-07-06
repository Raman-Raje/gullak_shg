// styled components
import { LinksList, List, MainItem } from '../style';
import { colors } from '@styles/vars';

// components
import Accordion from 'react-bootstrap/Accordion';

// hooks
import { useSidebarContext } from '@contexts/sidebarContext';

// menu links
import { getFilteredMenu } from '@constants/menu';

// redux
import { useDispatch } from 'react-redux';
import { setSideBarIndex } from '@store/slices/sideBarSlice';

const Content = () => {

    const dispatch = useDispatch();
    const menu = getFilteredMenu();
    const { toggleSidebar } = useSidebarContext();
    const activeStyle = { color: colors.blue };

    const handleSidebarIndex = (link) => {

        dispatch(setSideBarIndex(link.key));
        toggleSidebar();
    }

    return (
        <List as={Accordion}>
            {
                menu.map((item, index) => {
                    if (item.cat) {
                        return (
                            <Accordion.Item eventKey={item.cat} key={item.cat}>
                                <MainItem as={Accordion.Header}>
                                    <i className={`icon icon-${item.icon}`}></i> {item.cat}
                                </MainItem>
                                <Accordion.Body>
                                    <LinksList>
                                        {
                                            item.subCat.map(cat => {
                                                return (
                                                    <li key={cat.key}
                                                        onClick={() => handleSidebarIndex(cat)}
                                                    >
                                                        {cat.name}
                                                    </li>
                                                )
                                            })
                                        }
                                    </LinksList>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    } else if (item.key) {
                        return (
                            <MainItem
                                onClick={() => handleSidebarIndex(item)}
                                style={({ isActive }) =>
                                    isActive ? activeStyle : undefined
                                }
                                className={index === menu.length - 1 ? 'pin-down' : ''}
                            >
                                <i className={`icon icon-${item.icon}`}></i> {item.name}
                            </MainItem>
                        )
                    } else return null
                })
            }
        </List>
    )
}

export default Content;