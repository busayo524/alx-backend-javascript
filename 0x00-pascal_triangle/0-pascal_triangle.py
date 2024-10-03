def pascal_triangle(n):
    if n <= 0:
        return []
    
    triangle = []
    for i in range(n):
        row = [1]  # Every row starts with 1
        if i > 0:
            for j in range(1, i):
                row.append(triangle[i-1][j-1] + triangle[i-1][j])  # Sum of two elements above
            row.append(1)  # Every row ends with 1
        triangle.append(row)
    
    return triangle
