import React from 'react';
import { cmfConnect } from '@talend/react-cmf';
import { Inject, Layout, HeaderBar, SidePanel, } from '@talend/react-components';

function getContent(Component, props) {
    if (React.isValidElement(props)) {
        return props;
    }
    return <Component {...props} />;
}

function SimpleHomeViewComponent({
    getComponent,
    components,
    id,
    hasTheme,
    sidepanel,
    header,
}) {
    const Renderers = Inject.getAll(getComponent,{ HeaderBar, SidePanel });
    return (
        <Layout
            id={id}
            hasTheme={hasTheme}
            mode="TwoColumns"
            header={getContent(Renderers.HeaderBar, header)}
            one={getContent(Renderers.SidePanel, sidepanel)}
        >
            <div>
                This is a simple home view.
            </div>
        </Layout>

    );
}

SimpleHomeViewComponent.displayName = 'SimpleHomeView';

export default cmfConnect({
    omitCMFProps: true,
    withComponentRegistry: true,
    withDispatch: true,
    withDispatchActionCreator: true,
    withComponentId: true,
})(SimpleHomeViewComponent);
