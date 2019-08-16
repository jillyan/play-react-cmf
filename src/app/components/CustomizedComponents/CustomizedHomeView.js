import React from 'react';
import PropTypes from 'prop-types';
import { cmfConnect } from '@talend/react-cmf';
import { Inject, Layout, HeaderBar, SidePanel } from '@talend/react-components';
import { TabBar, List } from '@talend/react-containers';
import { getSelectedKey } from '@talend/react-containers/lib/TabBar/TabBar.selectors';
function getContent(Component, props) {
    if (React.isValidElement(props)) {
        return props;
    }
    return <Component {...props} />;
}

function CustomizedHomeView({
     getComponent,
     components,
     id,
     hasTheme,
     sidepanel,
     list,
     header,
     state,
 }) {
    const Renderers = Inject.getAll(getComponent,{ HeaderBar, SidePanel, List, TabBar });

    const tabProps = {
        id: 'my-tabs',
        items: [
            {
                key: '1',
                label: 'Tab1',
                'data-feature': 'action.1',
            },
            {
                key: '2',
                label: 'Tab2',
                'data-feature': 'action.2',
            },
            {
                key: '3',
                label: 'Tab3',
                'data-feature': 'action.3',
            },
            {
                key: '4',
                label: 'Tab4',
                'data-feature': 'action.4',
            },
            {
                key: '5',
                label: 'Tab5',
                'data-feature': 'action.5',
            },
        ],
        onSelect: console.log('.... I am be selected.'),
        selectedKey: '2',
    };
    const view = {
        id: 'slTab',
        items: [
            {
                id: 1,
                label: 'School',
                key: 'school',
            },
            {
                id: 2,
                label: 'Office',
                key: 'office',
            },
        ],
        selectedKey: 'office',
    };
    let currentTab = 'office';
    currentTab = getSelectedKey(state, 'sltab');
    // if(tabBarState.size > 0){
    //     currentTab = tabBarState.get('selectedKey');
    // }
    const tabDivHeight = "300px";
    return (
        <Layout
            id={id}
            hasTheme={hasTheme}
            mode="TwoColumns"
            header={getContent(Renderers.HeaderBar, header)}
            one={getContent(Renderers.SidePanel, sidepanel)}
        >
            {getContent(Renderers.List, list)}
            <TabBar {...view}/>
            {currentTab === 'office' ? <div style={{height:tabDivHeight}}>This is Office tab</div> :
                <div style={{height:tabDivHeight}}>This is School tab</div>}
        </Layout>
    );
}

CustomizedHomeView.displayName = 'CustomizedHomeListView';

CustomizedHomeView.propTypes = {
    getComponent: PropTypes.func,
    id: PropTypes.string,
    hasTheme: PropTypes.bool,
    components: PropTypes.object,
    header: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
    sidepanel: PropTypes.oneOfType([PropTypes.element, PropTypes.object]).isRequired,
    list: PropTypes.oneOfType([PropTypes.element, PropTypes.object]).isRequired,
    children: PropTypes.node,
};
export default cmfConnect({
    omitCMFProps: true,
    withComponentRegistry: true,
    withDispatch: true,
    withDispatchActionCreator: true,
    withComponentId: true,
})(CustomizedHomeView);
