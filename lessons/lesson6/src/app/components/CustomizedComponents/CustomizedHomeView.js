import React from 'react';
import PropTypes from 'prop-types';
import { cmfConnect } from '@talend/react-cmf';
import { Inject, Layout, HeaderBar, SidePanel, TabBar, List } from '@talend/react-components';
import actionCreators from '../../actions';
import theme from './CustomizedHomeView.scss';

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
     onSelectTab,
     selectedKey,
 }) {
    const Renderers = Inject.getAll(getComponent,{ HeaderBar, SidePanel, List });

    const tabProps = {
        id: 'my-tabs',
        className: theme.tab,
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
        ],
    };

    return (
        <Layout
            id={id}
            hasTheme={hasTheme}
            mode="TwoColumns"
            header={getContent(Renderers.HeaderBar, header)}
            one={getContent(Renderers.SidePanel, sidepanel)}
        >
            {getContent(Renderers.List, list)}
            <TabBar {...tabProps} selectedKey={selectedKey} onSelect={onSelectTab}> This is tab {selectedKey} </TabBar>
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
    selectedKey: PropTypes.string,
    onSelectTab: PropTypes.func.isRequired,
};

const mapStateToProps = ({ serviceLocator }) => ({
    selectedKey: serviceLocator.selectedKey,
});

const mapDispatchToProps = dispatch => ({
    onSelectTab: (event, item) => dispatch(actionCreators.selectTab(item.key)),
});

export default cmfConnect({
    mapStateToProps,
    mapDispatchToProps,
    omitCMFProps: true,
    withComponentRegistry: true,
    withDispatch: true,
    withDispatchActionCreator: true,
    withComponentId: true,
})(CustomizedHomeView);
