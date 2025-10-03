import type { Entry } from './types'

// بيانات وهمية مؤقتة للتطوير - يمكنك تعديلها حسب الحاجة
export const mockEntries: Record<string, Entry> = {
  'home_page_en-us': {
    title: 'Welcome to Our Store',
    locale: 'en-US',
    seo: {
      title: 'Home',
      description: 'Your favorite fashion destination',
    },
    header: {
      bannertext: 'Free shipping on orders over $50',
      links: [
        { link: { url: '/women', title: 'Women' } },
        { link: { url: '/men', title: 'Men' } },
        { link: { url: '/kids', title: 'Kids' } },
        { link: { url: '/accessories', title: 'Accessories' } },
        { link: { url: '/sale', title: 'Sale' } },
      ],
    },
    modular_blocks: [
      {
        component: {
          component_type: 'hero',
          component_variant: 'slim',
          title: 'Summer Collection 2024',
          description: '<p>Discover the latest trends in fashion</p>',
          background_image: {
            url: '/1.avif',
          },
          link: {
            title: 'Shop Now',
            url: '/shop',
          },
        },
      },
      {
        component: {
          component_type: 'grid',
          component_variant: 'cols4',
          title: 'Featured Products',
          description: 'Check out our best sellers',
          grid: [
            {
              item: {
                title: 'Casual T-Shirt',
                description: '<p>Comfortable and stylish</p>',
                img: {
                  url: '/2.avif',
                  title: 'T-Shirt',
                },
                link: {
                  title: 'View Details',
                  url: '/product/tshirt',
                },
              },
            },
            {
              item: {
                title: 'Summer Dress',
                description: '<p>Perfect for warm weather</p>',
                img: {
                  url: '/3.avif',
                  title: 'Dress',
                },
                link: {
                  title: 'View Details',
                  url: '/product/dress',
                },
              },
            },
            {
              item: {
                title: 'Sneakers',
                description: '<p>Comfortable footwear</p>',
                img: {
                  url: '/4.avif',
                  title: 'Sneakers',
                },
                link: {
                  title: 'View Details',
                  url: '/product/sneakers',
                },
              },
            },
            {
              item: {
                title: 'Backpack',
                description: '<p>Stylish and practical</p>',
                img: {
                  url: '/5.avif',
                  title: 'Backpack',
                },
                link: {
                  title: 'View Details',
                  url: '/product/backpack',
                },
              },
            },
          ],
        },
      },
    ],
  },
  'home_page_ar': {
    title: 'مرحباً بك في متجرنا',
    locale: 'ar',
    seo: {
      title: 'الرئيسية',
      description: 'وجهتك المفضلة للأزياء',
    },
    header: {
      bannertext: 'توصيل مجاني للطلبات فوق 50 دولار',
      links: [
        { link: { url: '/women', title: 'نساء' } },
        { link: { url: '/men', title: 'رجال' } },
        { link: { url: '/kids', title: 'أطفال' } },
        { link: { url: '/accessories', title: 'إكسسوارات' } },
        { link: { url: '/sale', title: 'تخفيضات' } },
      ],
    },
    modular_blocks: [
      {
        component: {
          component_type: 'hero',
          component_variant: 'slim',
          title: 'مجموعة صيف 2024',
          description: '<p>اكتشف أحدث صيحات الموضة</p>',
          background_image: {
            url: '/1.avif',
          },
          link: {
            title: 'تسوق الآن',
            url: '/shop',
          },
        },
      },
      {
        component: {
          component_type: 'grid',
          component_variant: 'cols4',
          title: 'المنتجات المميزة',
          description: 'تحقق من الأكثر مبيعاً',
          grid: [
            {
              item: {
                title: 'تيشرت كاجوال',
                description: '<p>مريح وأنيق</p>',
                img: {
                  url: '/2.avif',
                  title: 'تيشرت',
                },
                link: {
                  title: 'عرض التفاصيل',
                  url: '/product/tshirt',
                },
              },
            },
            {
              item: {
                title: 'فستان صيفي',
                description: '<p>مثالي للطقس الدافئ</p>',
                img: {
                  url: '/3.avif',
                  title: 'فستان',
                },
                link: {
                  title: 'عرض التفاصيل',
                  url: '/product/dress',
                },
              },
            },
            {
              item: {
                title: 'أحذية رياضية',
                description: '<p>أحذية مريحة</p>',
                img: {
                  url: '/4.avif',
                  title: 'أحذية',
                },
                link: {
                  title: 'عرض التفاصيل',
                  url: '/product/sneakers',
                },
              },
            },
            {
              item: {
                title: 'حقيبة ظهر',
                description: '<p>أنيقة وعملية</p>',
                img: {
                  url: '/5.avif',
                  title: 'حقيبة',
                },
                link: {
                  title: 'عرض التفاصيل',
                  url: '/product/backpack',
                },
              },
            },
          ],
        },
      },
    ],
  },
  'home_page_es': {
    title: 'Bienvenido a Nuestra Tienda',
    locale: 'es',
    seo: {
      title: 'Inicio',
      description: 'Tu destino favorito de moda',
    },
    header: {
      bannertext: 'Envío gratis en pedidos superiores a $50',
      links: [
        { link: { url: '/women', title: 'Mujeres' } },
        { link: { url: '/men', title: 'Hombres' } },
        { link: { url: '/kids', title: 'Niños' } },
        { link: { url: '/accessories', title: 'Accesorios' } },
        { link: { url: '/sale', title: 'Rebajas' } },
      ],
    },
    modular_blocks: [
      {
        component: {
          component_type: 'hero',
          component_variant: 'slim',
          title: 'Colección Verano 2024',
          description: '<p>Descubre las últimas tendencias en moda</p>',
          background_image: {
            url: '/1.avif',
          },
          link: {
            title: 'Comprar Ahora',
            url: '/shop',
          },
        },
      },
      {
        component: {
          component_type: 'grid',
          component_variant: 'cols4',
          title: 'Productos Destacados',
          description: 'Echa un vistazo a nuestros más vendidos',
          grid: [
            {
              item: {
                title: 'Camiseta Casual',
                description: '<p>Cómoda y elegante</p>',
                img: {
                  url: '/2.avif',
                  title: 'Camiseta',
                },
                link: {
                  title: 'Ver Detalles',
                  url: '/product/tshirt',
                },
              },
            },
            {
              item: {
                title: 'Vestido de Verano',
                description: '<p>Perfecto para clima cálido</p>',
                img: {
                  url: '/3.avif',
                  title: 'Vestido',
                },
                link: {
                  title: 'Ver Detalles',
                  url: '/product/dress',
                },
              },
            },
            {
              item: {
                title: 'Zapatillas',
                description: '<p>Calzado cómodo</p>',
                img: {
                  url: '/4.avif',
                  title: 'Zapatillas',
                },
                link: {
                  title: 'Ver Detalles',
                  url: '/product/sneakers',
                },
              },
            },
            {
              item: {
                title: 'Mochila',
                description: '<p>Elegante y práctica</p>',
                img: {
                  url: '/5.avif',
                  title: 'Mochila',
                },
                link: {
                  title: 'Ver Detalles',
                  url: '/product/backpack',
                },
              },
            },
          ],
        },
      },
    ],
  },
}

// دالة للحصول على البيانات الوهمية
export async function getMockEntry(
  contentType: string,
  entryId: string,
  locale: string = 'en-US'
): Promise<Entry | undefined> {
  // محاكاة تأخير API
  await new Promise((resolve) => setTimeout(resolve, 100))

  const key = `${contentType}_${locale.toLowerCase()}`
  return mockEntries[key] || mockEntries['home_page_en-us']
}
