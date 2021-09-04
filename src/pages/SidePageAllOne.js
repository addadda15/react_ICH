function SidePageAllOne() {
    const iframePart = () => {
        return {
          __html:
            '<iframe src="https://prod-apnortheast-a.online.tableau.com/t/minju/views/3_16302388423020/sheet0?:showAppBanner=false&:display_count=no&:showVizHome=no&:origin=viz_share_link&:embed=true" style="display:block; width:90vw; height: 100vh"></iframe>',
        };
    }

    return <div dangerouslySetInnerHTML={iframePart()} />;

}

export default SidePageAllOne;