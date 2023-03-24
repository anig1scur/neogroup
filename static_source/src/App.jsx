import {isBrowser} from './common/utils';
import withHypernova from "./common/withHypernova";
import Nav from './components/Nav';
import { TopicSidebar, GroupSidebar } from "./components/Sidebar";
import { Topic, Group, NewTopic } from './pages';

const clientExport = {
    Nav: withHypernova('Nav')(Nav),
    Topic: withHypernova('Topic')(Topic),
    TopicSidebar,
    Group: withHypernova('Group')(Group),
    GroupSidebar,
    NewTopic: withHypernova('NewTopic')(NewTopic),

}

const serverExport = {
    Nav,
    Topic,
    TopicSidebar,
    Group,
    GroupSidebar,
    NewTopic
}

export default isBrowser() ? clientExport : serverExport;
