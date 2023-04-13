from django.urls import path, re_path

from .views import *

urlpatterns = [
    # path('', index,name='index')
    path('companies/',CompaniesAPIView.as_view()),
    path('companies/<int:company_id>/', about_company),
    path('companies/<int:company_id>/vacancies/', CompanyVacanciesAPIView.as_view()),
    path('vacancies/', vacancies_list),
    path('vacancies/<int:vacancy_id>/', about_vacancy),
    path('vacancies/top_ten/', vacancies_top_ten),
]