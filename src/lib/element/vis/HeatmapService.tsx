export default class HeatmapService {

    public static loadData(qualifier:string, groupBy:string, url:string) {
        // @ts-ignore
        const client = GaiaJsSDK.KnowrClientBuilder.http(url)
            .withSecret("e0d47ea7-3b5f-44a9-ae23-528118a05011")
            .withApiKey("iot40")
            .build();

        // @ts-ignore
        return client.execute(GaiaJsSDK.KnowrRequest.create(config => {
            config.vis({qualifier}, (vis:any) => {
                vis.heatmap({groupBy}, (e:any) => {
                    e.timestamp();
                    e.value();
                });
            });
        })).then((result:any) => {
            return result.data.vis.heatmap;
        });
    }

}
