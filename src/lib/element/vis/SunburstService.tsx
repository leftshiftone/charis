export default class SunburstService {

    public static loadData(qualifier:string, groupBy:string, url:string) {
        // @ts-ignore
        const client = GaiaJsSDK.KnowrClientBuilder.http(url)
            .withSecret("e0d47ea7-3b5f-44a9-ae23-528118a05011")
            .withApiKey("iot40")
            .build();

        // @ts-ignore
        return client.execute(GaiaJsSDK.KnowrRequest.create(config => {
            config.vis({qualifier}, (vis:any) => {
                vis.sunburst({groupBy}, (e:any) => {
                    e.name();
                    e.children((a:any) => {
                        a.name();
                        a.children((b:any) => {
                            b.name();
                            b.children((c:any) => {
                                c.name();
                                c.children((d:any) => {
                                    d.name();
                                    d.size();
                                });
                            });
                        });
                    });
                });
            });
        })).then((result:any) => {
            return result.data.vis.sunburst;
        });
    }

}
