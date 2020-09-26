export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6e8fcc278576459ed086b8',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-r34a7ubs',
                  apiId: '5000557e-7e00-405a-845d-3d6512a064e6'
                },
                {
                  buildHookId: '5f6e8fcc3aa9ee501966369b',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-7f4hph8g',
                  apiId: 'c67faead-f236-4a24-a59f-707b9dc9b4c5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DentalXpres/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-7f4hph8g.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
