from typing import Any

from fastapi import APIRouter
from sqlmodel import func, select

from app.api.deps import SessionDep
from app.model.school import School, SchoolsPublic, SchoolsSummary

router = APIRouter()


@router.get("/", response_model=SchoolsPublic)
def read_schools(
    session: SessionDep,
    q: str | None = None,
    skip: int = 0,
    limit: int = 10,
) -> Any:
    """
    Retrieve schools.
    """
    if q:
        count_statement = (
            select(func.count())
            .select_from(School)
            .where(func.lower(School.school).contains(q.lower()))
            .where(School.status_type == "Active")
        )
        statement = (
            select(School)
            .where(func.lower(School.school).contains(q.lower()))
            .where(School.status_type == "Active")
            .offset(skip)
            .limit(limit)
        )
    else:
        count_statement = select(func.count()).select_from(School)
        statement = select(School).offset(skip).limit(limit)

    count = session.exec(count_statement).one()
    schools = session.exec(statement).all()

    return SchoolsPublic(data=schools, count=count)


@router.get("/summary", response_model=SchoolsSummary)
def read_schools_summary(
    session: SessionDep,
    q: str | None = None,
    skip: int = 0,
    limit: int = 10,
) -> Any:
    """
    Retrieve schools with a summarized view.
    """
    if q:
        count_statement = (
            select(func.count())
            .select_from(School)
            .where(func.lower(School.school).contains(q.lower()))
            .where(School.status_type == "Active")
        )
        statement = (
            select(School)
            .where(func.lower(School.school).contains(q.lower()))
            .where(School.status_type == "Active")
            .offset(skip)
            .limit(limit)
        )
    else:
        count_statement = select(func.count()).select_from(School)
        statement = select(School).offset(skip).limit(limit)

    count = session.exec(count_statement).one()
    schools = session.exec(statement).all()

    return SchoolsSummary(data=schools, count=count)
