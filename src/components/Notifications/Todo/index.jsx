import { PlannerItemContainer, Wrapper, TimestampWrapper } from '@components/Notifications/Todo/planner'

// components
import Timestamp from '@ui/Timestamp';
import Checkbox from '@ui/Checkbox';
import { Badge } from '@ui/Badge/style';

// utils
import { notificationColors } from '@constants/colors';
import moment from 'moment';


const Todo = ({ data }) => {
    const { _id, title, status, date, time, type } = data;
    const color = notificationColors.find(({ cat }) => cat === type).color;
    const complete = status === 'read';

    // use date and time to create a timestamp
    const timestamp = new Date(`${date} ${time}`);

    const TodoLayout = () => {
        return (
            <PlannerItemContainer className="list-item" tabIndex={0}>
                <Wrapper>
                    <span>{title}</span>
                    <TimestampWrapper>
                        <Badge color={color} />
                        <Timestamp date={moment(timestamp).toDate()} time={true} />
                    </TimestampWrapper>
                </Wrapper>
                <Checkbox variant="basic" id={`task-${_id}`} checked={complete}
                    handler={() => console.log('toggle complete')} />
            </PlannerItemContainer>
        )
    }

    return (
        <TodoLayout />
    )
}

export default Todo;