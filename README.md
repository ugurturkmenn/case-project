
# Case Projesi

Bu projenin ne yaptığı ve kimin için olduğu hakkında kısa bir açıklama

Proje geliştirilirken dom performansını arttırmak ve sorunsuz bir şekilde maçları listelemek için React-virtuoso kütüphanesinden faydalanıldı. Bu kütüphane ile ekranda sadece ekran boyutu kadar veriyi göstermesi sağlandı ve scroll edildikçe yeni veriler eklendi. Bu şekilde DOM şişmesinin ve tarayıcı bellek tüketimini minimize hale getirdi.

useMemo, useCallback gibi faydalı hooklardan gerekli performans desteği alındı ve React + Typescript + Webpack ile geliştirildi.

 

## Aşağıdaki komutlarla projeyi ayaklandırabilirsiniz.
```
git clone https://github.com/ugurturkmenn/case-project
cp .env.dist .env
yarn install
yarn start
```