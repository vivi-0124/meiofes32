import { Metadata } from 'next';
import { InteractiveMap } from '@/app/visitor-info/campus-map/components/interactive-map';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/../components/ui/tabs';
import { Button } from '@/../components/ui/button';
import { Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'キャンパスマップ - 大学祭2025',
  description: '大学祭のキャンパスマップ。各エリアの配置や施設の場所を確認できます。',
};

export default function CampusMapPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">キャンパスマップ</h1>
          <p className="text-xl text-muted-foreground">
            各エリアの配置や施設の場所を確認して、効率よく楽しもう
          </p>
        </div>
        
        <div className="flex justify-end mb-6">
          <Button variant="outline" size="sm" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            PDFをダウンロード
          </Button>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="all">全体図</TabsTrigger>
            <TabsTrigger value="food">飲食エリア</TabsTrigger>
            <TabsTrigger value="stage">ステージ</TabsTrigger>
            <TabsTrigger value="exhibit">展示</TabsTrigger>
            <TabsTrigger value="facility">施設</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all">
            <InteractiveMap mapType="all" />
          </TabsContent>
          <TabsContent value="food">
            <InteractiveMap mapType="food" />
          </TabsContent>
          <TabsContent value="stage">
            <InteractiveMap mapType="stage" />
          </TabsContent>
          <TabsContent value="exhibit">
            <InteractiveMap mapType="exhibit" />
          </TabsContent>
          <TabsContent value="facility">
            <InteractiveMap mapType="facility" />
          </TabsContent>
        </Tabs>
        
        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">主要エリア</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">メインステージ</h3>
                <p className="text-muted-foreground">中央広場に設置された大型ステージ。メインイベントやライブはこちらで。</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">模擬店通り</h3>
                <p className="text-muted-foreground">中央通りに並ぶ学生による模擬店。美味しい食べ物やドリンクが楽しめます。</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">教室企画エリア</h3>
                <p className="text-muted-foreground">A棟、B棟、C棟で行われる様々な展示や体験型企画。</p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2">屋外ステージ</h3>
                <p className="text-muted-foreground">南広場に設置されたサブステージ。ダンスやアコースティックライブに最適。</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">施設情報</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="text-base font-medium mb-2">救護所</h3>
                  <p className="text-sm text-muted-foreground">管理棟1階と中央広場に設置</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="text-base font-medium mb-2">インフォメーションセンター</h3>
                  <p className="text-sm text-muted-foreground">正門入ってすぐと中央広場に設置</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="text-base font-medium mb-2">休憩所</h3>
                  <p className="text-sm text-muted-foreground">各棟1階と中央広場周辺に設置</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="text-base font-medium mb-2">トイレ</h3>
                  <p className="text-sm text-muted-foreground">各棟各階と広場に仮設トイレ設置</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="text-base font-medium mb-2">ベビーケアルーム</h3>
                  <p className="text-sm text-muted-foreground">管理棟1階に授乳・おむつ替えスペース</p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="text-base font-medium mb-2">ATM</h3>
                  <p className="text-sm text-muted-foreground">管理棟1階ロビーに設置</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}