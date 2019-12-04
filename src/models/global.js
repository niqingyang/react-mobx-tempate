import {observable, action} from 'mobx';
import {namespace} from 'mobx-react-stores';

@namespace('global')
class Global {

}

export default new Global();