def sort_users_by_age(users):
    """
    Return users sorted by age in ascending order.

    Invalid records are ignored if:
    - The item is not a dictionary
    - 'age' is missing
    - 'age' is not an integer
    - 'age' is a boolean
    - The age is negative
    """
    if not isinstance(users, list):
        return []

    def is_valid(user):
        if not isinstance(user, dict):
            return False
        age = user.get("age")
        return isinstance(age, int) and not isinstance(age, bool) and age >= 0

    return sorted(
        (user for user in users if is_valid(user)),
        key=lambda user: user["age"],
    )


if __name__ == "__main__":
    users = [
        {"name": "Charlie", "age": 30, "email": "charlie@example.com"},
        {"name": "Alice", "age": 25, "email": "alice@example.com"},
        {"name": "Bob", "age": 20, "email": "bob@example.com"},
        {"name": "Invalid", "age": "unknown", "email": "invalid@example.com"},
        {"name": "Missing Age", "email": "missing@example.com"},
        {"name": "Negative Age", "age": -5, "email": "negative@example.com"},
    ]

    result = sort_users_by_age(users)
    for user in result:
        print(user)

    assert [user["name"] for user in result] == ["Bob", "Alice", "Charlie"]
    assert sort_users_by_age(None) == []
    assert sort_users_by_age("not a list") == []
    assert sort_users_by_age([]) == []
    assert sort_users_by_age([{"name": "Zero", "age": 0}]) == [{"name": "Zero", "age": 0}]
    assert sort_users_by_age([{"name": "Bool", "age": True}]) == []
    assert sort_users_by_age([{"name": "Float", "age": 25.0}]) == []
    assert sort_users_by_age(["not a dict", 123, None]) == []
    print("All checks passed.")
